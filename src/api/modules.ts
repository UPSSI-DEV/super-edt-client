import modules from "./data/modules.json";

// Exports

export { getModules };
export { Module as IModule, Resource, Progress, ModuleReturn };

// Functions

function getModules(): ModuleReturn {
  const moduleList = modules.map((x) => <Module>x);
  const partitionnedList: ModuleReturn = {};

  for (const el of moduleList) {
    if (!Object.keys(partitionnedList).includes("" + el.ue))
      partitionnedList[el.ue] = [];
    partitionnedList[el.ue].push(el);
  }

  return partitionnedList;
}

// Interfaces

interface ModuleReturn {
  [index: number]: Module[];
}

interface Module {
  ue: number;
  name: string;
  prof: string;
  code: string;
  resources: Resource[];
  progress: Progress[];
}

interface Resource {
  name: string;
  link: string;
}

interface Progress {
  name: string;
  percentage: number;
}
