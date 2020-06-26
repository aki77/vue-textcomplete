import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const VueTextcomplete: { install: InstallFunction };
export default VueTextcomplete;

export const VueTextcompleteSample: VueConstructor<Vue>;
