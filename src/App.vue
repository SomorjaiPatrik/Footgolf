<template>
  <div id="app">
    <p>
      Linkek: <a href="fob2016.txt" download>fob2016.txt  </a>
      <a href="k_infoism_18maj_fl.pdf" target="_blank">Feladat   </a>
      <a href="https://github.com/SomorjaiPatrik/Footgolf.git" target="_blank">Forrás </a>
    </p>
    <txt-olvaso v-on:load="src = $event" title="Kérem töltse fel a forrás (kiserlet.txt) állományt!" />
    <div id="megoldas" v-show="show">
        <p>3. feladat: <br> Az összes versenyző száma: {{this.Footgolf.length}}</p>
        <p>4. feladat: <br> A női versenyzők aránya {{this.NoiArany}}%.</p>
        <p>6. feladat: <br> A legtöbb pontot szerzett női versenyző neve: {{this.LgtNoiNev}}, az egyesület neve: {{this.LgtNoiEgy}}, a pontszáma: {{this.LgtNoiPont}}.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import TxtOlvaso from "./components/TxtOlvaso.vue";
import { Footgolf } from "./footgolf";
import { isNull } from "util";
import { triggerAsyncId } from "async_hooks";

@Component({
  components: {
    TxtOlvaso
  }
})
export default class App extends Vue {
  private src: string = "";
  private show: boolean = false;
  private Footgolf: Footgolf[] = [];
  private noiDb: number = 0;
  private arany: number = 0;
  private LgtNoiNev: string = "";
  private LgtNoiEgy: string = "";
  private LgtNoiPont: number = 0;

  @Watch("src", { immediate: true, deep: true })
  onForrasChanged(val: string, oldVal: string) {
    if (val != "") {
      this.Feldolgoz();
    }
  }
  //<p>4. feladat: <br> A női versenyzők aránya {{this.NoiArany()}}%.</p>
  private Feldolgoz(): void {
    try {
      this.src.split("\n").forEach(i => {
        const row: string = i.trim();
        this.Footgolf.push(new Footgolf(i));
      });
      this.show = true;
    } catch (error) {
      this.show = false;
      this.Footgolf = [];
      this.src = "";
      window.alert("Hibás forrás");
    }
    this.NoiLgtbbPont();
  }

  private get NoiArany() {
    this.Footgolf.forEach(i => {
      if (i.Kategória == "Noi") this.noiDb++;
    });
    return ((this.noiDb / this.Footgolf.length) * 100).toFixed(2);
  }

  private NoiLgtbbPont(): void {
    let maxi: number = -1;
    for (let i = 0; i < this.Footgolf.length; i++) {
      if (this.Footgolf[i].Kategória == "Noi") {
        if (maxi == -1) {
          maxi = i;
        } else {
          if (this.Footgolf[i].Pontszam > this.Footgolf[maxi].Pontszam) {
            maxi = i;
          }
        }
      }
    }

    this.LgtNoiNev = this.Footgolf[maxi].Név;
    this.LgtNoiEgy = this.Footgolf[maxi].Egyesület;
    this.LgtNoiPont = this.Footgolf[maxi].Pontszam;
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
a {
  text-decoration: none;
}
</style>
