import { VtmnNavbar } from '@vtmn/vue';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/navigation/navbar.csf';

export default {
  title: 'Components / Navigation / VtmnNavbar',
  component: VtmnNavbar,
  argTypes,
  parameters,
};

const Template = (args) => ({
  components: { VtmnNavbar },
  setup() {
    return { args };
  },
  template: `<div style="width: 800px; display: flex; justify-content: center">
    <VtmnNavbar v-bind="args">
      <template #logo>
        <a aria-label="decathlon logo" href="#">
            <svg viewBox="0 0 200 50" aria-label="Decathlon logo" role="img">
              <title>Decathlon</title>
              <g
                id="decathlon-logo"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g>
                  <polygon
                    id="Mask"
                    fill="#0082C3"
                    points="0 50 200 50 200 0 0 0"
                  />
                  <path
                    d="M74.527071,16.6779432 L74.5871824,16.7553801 L71.2267902,22.1407602 L71.002557,21.8748979 L70.8460776,21.700949 L70.539255,21.3787525 L70.2887046,21.1312369 C69.0363546,19.9259321 66.6358297,18.0780871 63.7352818,18.1375439 C59.9290815,18.2085965 57.0226936,21.325848 57.0226936,24.9547953 C57.0226936,28.1436842 58.9669204,31.6966082 64.1392314,31.7764327 C67.113322,31.8130862 69.1436987,29.7118123 70.1836322,28.1974417 L70.3846431,27.8933918 C70.5039784,27.7066387 70.7838561,27.2462134 71.1752358,26.5953638 L79.674898,12.2866667 L86.5528714,12.2866667 L86.5528714,37.6767251 L80.2228644,37.6767251 L80.2228644,33.8676608 L75.1805945,33.8468248 L74.5072706,33.8509942 L74.3235998,33.858709 L74.2914123,33.8649142 L74.2959289,33.8676608 L74.1598124,34.0180955 L73.9980541,34.1851087 L73.7694056,34.4074517 L73.5771497,34.5846179 L73.3555225,34.7794959 L73.1047092,34.9893808 C71.3357459,36.4326274 67.6334022,38.6960396 62.2447664,38.1735088 C56.8341838,37.6568421 50.2120451,33.3854971 50.2120451,24.8340351 C50.2120451,20.7740936 53.2729877,12.0123977 63.7964597,11.7773099 C70.2757311,11.6338809 74.0171371,16.0367651 74.527071,16.6779432 Z M151.806828,11.7558772 C155.269964,11.7558772 158.547517,13.0839474 161.071324,15.526345 C162.688692,17.0955516 163.833945,18.9380513 164.476033,20.934262 L164.47457,12.2863743 L170.416141,12.2863743 L180.294465,26.3963158 L180.294465,12.2863743 L186.881185,12.2863743 L186.881185,37.6936842 L181.094168,37.6936842 L171.058655,23.5384211 L171.058655,37.6936842 L164.47457,37.6936842 L164.475487,28.9844263 C163.864697,30.9717297 162.802078,32.7568784 161.328329,34.2509064 C158.810084,36.8365789 155.381196,38.2389181 151.769653,38.2389181 C147.984791,38.2389181 144.740588,36.9068625 142.198981,34.3055955 L142.199356,37.6936842 L127.989697,37.6936842 L127.989697,12.2910526 L134.527826,12.2910526 L134.527826,32.0799415 L140.436099,32.0812283 C139.101501,29.9643233 138.427608,27.515233 138.427608,24.732193 C138.427608,21.2096784 139.806598,17.9710819 142.362018,15.4938889 C144.914804,13.0117251 148.120934,11.7558772 151.806828,11.7558772 Z M21.2259697,12.2866082 C25.4943703,12.2866082 28.4777429,12.8202339 31.2769964,15.3216959 C33.2874427,17.1134282 34.5586383,19.5436013 35.0146705,22.5223167 L35.0132665,12.2866082 L49.6394612,12.2866082 L49.6394612,17.8759649 L41.5929612,17.8850292 L41.5929612,22.0359064 L48.560506,22.0297661 L48.560506,27.4935088 L41.5929612,27.5005263 L41.5929612,32.1054971 L49.6394612,32.1054971 L49.6394612,37.6765497 L35.0132665,37.6765497 L35.0151902,27.5477124 C34.5656005,30.3264025 33.3179492,32.6755167 31.3068535,34.5491813 C28.4393969,37.188655 25.9071014,37.6936257 22.1266602,37.6936257 L12.0381658,37.6936257 L12.0381658,12.2866082 L21.2259697,12.2866082 Z M104.712103,12.2764327 L104.712103,18.3504094 L99.6088731,18.3504094 L99.6088731,37.6936842 L93.0338619,37.6936842 L93.0338619,18.3504094 L87.9259487,18.3504094 L87.9259487,12.2764327 L104.712103,12.2764327 Z M112.640813,12.2840351 L112.640813,21.9322807 L119.407554,21.9322807 L119.407554,12.2840351 L125.982566,12.2840351 L125.982566,37.6936842 L119.407554,37.6936842 L119.407554,27.9717544 L112.640813,27.9717544 L112.640813,37.6936842 L106.068729,37.6936842 L106.068729,12.2840351 L112.640813,12.2840351 Z M21.2259697,17.7500585 L18.6152261,17.7500585 L18.6152261,32.1138012 L21.2558269,32.1138012 C26.2879263,32.1138012 28.6662527,29.9032749 28.6662527,24.9035673 C28.6662527,20.3287135 26.055509,17.7500585 21.2259697,17.7500585 Z M151.84371,18.077807 C147.983943,18.077807 144.951687,21.0649415 144.951687,24.8011988 C144.951687,28.8289766 148.194992,31.9096784 151.769653,31.9096784 C155.492722,31.9096784 158.521758,28.9652339 158.521758,24.8011988 C158.521758,21.0649415 155.492722,18.077807 151.84371,18.077807 Z M80.3531235,22.8062573 L76.9608252,28.5562573 L80.3531235,28.5562573 L80.3531235,22.8062573 Z"
                    id="typo"
                    fill="#FEFEFE"
                  />
                </g>
              </g>
            </svg>
          </a>
        </template>
    </VtmnNavbar>
  </div>`,
});

export const Overview = Template.bind({});
Overview.args = {};
