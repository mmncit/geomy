<script>
  import router from "page";
  import Home from "./pages/Home.svelte";
  import HelloWorld from "./pages/hello-world/Page.svelte";
  import HelloThree from "./pages/hello-three/Page.svelte";

  const examples = [
    { title: "hello-world", component: HelloWorld },
    { title: "hello-three", component: HelloThree },
  ];

  let page;
  router("/", () => (page = Home));
  for (let i = 0; i < examples.length; i++) {
    const example = examples[i];
    router(`/${example.title}`, () => (page = example.component));
  }
  router.start();

</script>

<style>
  main {
    display: flex;
    flex-direction: row;
    width: 100vw;
  }
  h1 {
    font-size: 14pt;
    text-align: center;
    margin-bottom: 40px;
  }
  #nav {
    position: relative;
    left: 0px;
    flex: 1;
    max-width: 300px;
    min-width: 300px;
    height: 100vh;
    overflow: auto;
    background: #ebebeb;
  }
  .nav-link {
    display: block;
    padding: 0 10px;
  }
  #panel {
    height: 100vh;
    width: 100%;
    overflow: auto;
  }
  a {
    text-decoration: none;
  }
  a:link,
  a:visited {
    color: #357785;
  }
  a:hover {
    text-decoration: underline;
  }

</style>

<main>
  <div id="nav">
    <h1><a href="/">geomy</a></h1>
    {#each examples as example}
      <a class="nav-link" href="/{example.title}">{example.title}</a>
    {/each}
  </div>
  <div id="panel">
    <svelte:component this={page} />
  </div>
</main>
