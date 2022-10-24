<template>
  <div class="flex h-full flex-col gap-8 p-4">
    <div>
      <h1 class="mb-4 text-center text-xl font-bold">
        Bienvenue {{ meta.display_name }}
      </h1>
      <p>
        Il nous faut quelques informations en plus afin de compléter ton compte.
      </p>
    </div>

    <div class="flex grow flex-col gap-4">
      <h3>Informations pour l'EDT</h3>

      <Select :options="classes" v-model="user.class" />

      <h3>Informations pour le suivi des notes</h3>

      <input
        type="number"
        v-model="user.student_id"
        placeholder="Numéro étudiant (ex: 22136597)"
      />

      <input
        type="text"
        v-model="user.name"
        placeholder="Prénom Nom (pour le bulletin)"
      />
    </div>

    <button
      @click="completeSignup()"
      class="button"
      :disabled="signup_complete"
    >
      <p class="font-semibold">Valider les informations</p>
    </button>
  </div>
</template>

<script setup lang="ts">
const classes = { "SRI 1A": "1", "SRI 2A": "2", "SRI 3A": "3" };

/* Required data for signup */

const signup_complete = ref(false);
const user = useLocalStorage("user", {
  class: null,
  student_id: null,
  name: null,
});

const meta = useLocalStorage("meta", {
  user_id: "",
  provider: "",
  username: "",
  display_name: "",
});

async function completeSignup() {
  // Update profile
  const updatedData = {
    ...user.value,
    provider_name: meta.value.provider,
    provider_tag: meta.value.username,
  };

  console.log(updatedData, meta.value.user_id);

  const { data, err } = await to_res(
    pocketbase.records.update("profiles", meta.value.user_id, updatedData)
  );
  console.log(data, err);

  // Remove temporary stored values
  localStorage.removeItem("provider");
  localStorage.removeItem("meta");
  localStorage.removeItem("user");

  // Continue navigation
  useRouter().push("/calendar");
}

const pocketbase = usePocketbase();

onMounted(async () => {
  // Obtain OAuth params
  const params = new URL(location.href).searchParams;
  const provider = JSON.parse(localStorage.getItem("provider"));
  const redirectUrl = useAuthRedirectUrl();

  if (params.get("state") != provider.state) throw "states don't match";

  // Attempt to login / create account
  const { data, err } = await to_res(
    pocketbase.users.authViaOAuth2(
      provider.name,
      params.get("code"),
      provider.codeVerifier,
      redirectUrl
    )
  );

  if (err) {
    const user_data = await pocketbase.users.refresh();
    meta.value.user_id = user_data.user.profile.id;

    console.log("Refreshed user data", user_data);
  } else {
    console.log("Data from OAuth ", data);

    meta.value.provider = provider.name;
    meta.value.user_id = data.user.profile.id;

    if (meta.value.provider == "discord") {
      meta.value.username = data.meta.name;
      meta.value.display_name = data.meta.username;
    } else if (meta.value.provider == "google") {
      meta.value.username = data.meta.email;
      meta.value.display_name = data.meta.name.split(" ").shift();
      user.value.name = data.meta.name;
    }
  }
});
</script>

<style scoped></style>
