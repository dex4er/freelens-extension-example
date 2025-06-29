import { Common } from "@freelensapp/extensions";
import { makeObservable, observable } from "mobx";

type I = {};

export interface ExamplePreferencesModel extends I {
  enabled: boolean;
}

export class ExamplePreferencesStore extends Common.Store.ExtensionStore<ExamplePreferencesModel> {
  @observable accessor enabled = false;

  constructor() {
    super({
      configName: "example-preferences-store",
      defaults: {
        enabled: false,
      },
    });
    console.log("[EXAMPLE-PREFERENCES-STORE] constructor");
    makeObservable(this);
  }

  fromStore({ enabled }: ExamplePreferencesModel): void {
    console.log(`[EXAMPLE-PREFERENCES-STORE] set ${enabled}`);

    this.enabled = enabled;
  }

  toJSON(): ExamplePreferencesModel {
    const enabled = this.enabled;
    console.log(`[EXAMPLE-PREFERENCES-STORE] get ${enabled}`);
    return {
      enabled,
    };
  }
}
