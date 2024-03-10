import Signal from "@rbxts/signal";
import { HotReloader } from "Utils/HotReloader";

export class StorybookLoader {
	private StorybookResult?: unknown = undefined;
	Module: ModuleScript;
	OnStorybookUpdated: Signal<() => void>;
	HotReloader?: HotReloader;
	ReloadPromise?: Promise<unknown>;
	HotReloaderConnection?: RBXScriptConnection;

	constructor(module: ModuleScript) {
		this.OnStorybookUpdated = new Signal();
		this.Module = module;
	}
	GetCurrentResult() {
		return this.StorybookResult;
	}
	Init() {
		const reloaderResult = HotReloader.require(this.Module);
		this.HotReloader = reloaderResult.Reloader;

		this.OnReloadPromise(reloaderResult.Result);
		this.HotReloaderConnection = reloaderResult.Reloader.OnReloadStarted.Connect((result) => {
			this.OnReloadPromise(result);
		});
	}
	OnReloadPromise(result: Promise<unknown>) {
		if (this.ReloadPromise) {
			this.ReloadPromise.cancel();
		}

		this.ReloadPromise = result.then((result) => {
			this.StorybookResult = result;
			this.OnStorybookUpdated.Fire();
		});
	}
	Destroy() {
		if (this.ReloadPromise) this.ReloadPromise.cancel();
		if (this.HotReloaderConnection) this.HotReloaderConnection.Disconnect();
		if (this.HotReloader) this.HotReloader.Destroy();
	}
}
