import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue';
import { sidebarIconPlugin } from './utils/icontransformer';
import './style.scss'


export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();

    const runScripts = () => {
      // Use a short timeout to wait for the DOM to be painted
      setTimeout(() => {
        sidebarIconPlugin();
        // After replacing icons, add a class to the body to trigger the fade-in
        document.body.classList.add('icons-loaded');
      }, 50);
    };

    onMounted(() => {
      runScripts();
    });

    watch(() => route.path, () => {
      // On route change, briefly hide the text again before running the script
      document.body.classList.remove('icons-loaded');
      runScripts();
    });
  },
} satisfies Theme