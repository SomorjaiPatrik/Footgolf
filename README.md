# Vue.js + Typescript + Visual Studio Code

## netlify link:
https://ecstatic-swirles-d68c4f.netlify.com/

## Fejlesztői környezet telepítése, beállítása (Windows)
1.  Node.js letöltése, telepítése:<br>
    https://nodejs.org/en/download/
2.  Command prompt, npm frissítése, globális Node.js csomag(ok) telepítése:<br>
    "npm install -g npm@next"
    "npm install -g @vue/cli" parancsal<br>
    "npm install -g @vue/cli-init" parancsal<br>
2.  Git for windows telepítése (opcionális, git-hez):<br>
    https://git-for-windows.github.io/
3.  Visual Studio Code (User Installer) telepítése:<br>
    https://code.visualstudio.com/Download<br>
    (User installer: "%LocalAppData%\Programs\Microsoft VS Code\bin" települ!)
4.  Jedlik AD hiba - PATH "megtelik..."
    Keresési útvonal (path) bővítése, ha a parancssorból (CMD.EXE) kiadott "npm", "vue" vagy<br>
    "code ." parancs nem található:<br>
    - Vezérlőpult/Rendszer/Speciális rendszerbeállítások/Speciális fül/Környezeti változók/Path/Rendszerváltozók
    - Ismétlődő PATH bejegyzések törlése a Rendszeváltozóknál
    - Új bejegyzések (felhasználói) hozzáadása, ha hiányoznak (idézőjelek nélkül):
        - "C:\Program Files\nodejs\"
        - "%LocalAppData%\Programs\Microsoft VS Code\bin"
        - "%APPDATA%\npm"
5.  VSCode futtatása, Visual Studio Extensions telepítése: Ctrl-Shift-X<br>
    Kiterjesztés keresése, telepítés:<br>
    - Vue.js Extension Pack by Muhammad Ubaid Raza<br>
    https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack
    - Debugger for Chrome<br>
    https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
    - vscode-icons<br>
    https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons
    - vscode-pdf<br>
    https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf
    - további kiterjesztések telepítése igény szerint
6.  Billentyűkombinációk beállítása (opcionális):<br> 
    File\Preferences\Keyboard Shortcuts menüvel, vagy Ctrl-K majd Ctrl-S<br>
    Parancs keresése: gépeléssel<br>
    Hozzárendelés, módosítás: "ceruza" ikonra kattíntással, törlés: Del bill.<br>
     - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
     - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
7.  "Vue.js devtools" Chrome bővítmény telepítése, Chrome böngésző újraindítása
    https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
8.  Opcionális: VSCode beállítása: lsd. az oldal végén

## Új projekt létrehozása
1. CMD.EXE (Parancssor futtatása)
2. Projekt szülőmappájának aktuálissá tétele (pl.: CD D:\VueJsProjects)
3. "vue create my-first-vuejs-app" parancs futtatása (idézőjelek nélkül, nem lehet nagybetű), lépések:
    - Manually select features
    - Beállít (*), a többi üres ( ):
        - (*) TypeScript
        - (*) Linter / Formatter
    - Use class-style component syntax? (Y/n) Y
    - Use Babel alongside TypeScript for auto-detected polyfills? (y/N) N
    - Pick a linter / formatter config: ESLint + Prettier
    - Pick additional lint features: 
        - (*) Lint on save
        - (*) Lint and fix on commit
    - Where do you prefer placing config for Babel, PostCSS, ESLint, etc.?: In dedicated config files
    - Save this as a preset for future projects? (y/N) N
4. VSCode indítása, projekt mappa (my-first-vuejs-app) megnyitása:
    - File\Open Folder... (vagy)
    - Project mappa helyi menüjéből: Open with Code
    - Vagy CMD ablakból: CD my-first-vuejs-app majd "code ."
5. ESLint szábályok bekapcsolása<br>
    Alapértelmezetten a szabályok (rules) ki vannak kapcsolva.<br>
    Bekapcsolni a .eslintrc.js állományban lehet őket a rules szekcióban<br>
    Szabályok és leírásuk: https://eslint.org/docs/rules/



## Fejlesztés, tesztelés
1.  VSCode indítása (utoljára megnyitott projektet visszatölti), vagy<br>
    Project mappa helyi menüből: Open with Code, vagy<br>
    VSCode indítása után File/Open Folder... menüpontba a project mappa (my-first-vuejs-app) megnyitása
2.  Letöltött (github-clone, ZIP, stb) repók esetén a node csomagok telepítése új terminál ablakból (Ctr-Shift-ö):<br>
    "npm install"
2.  Fejlesztői fordítás új terminál ablakból (Ctr-Shift-ö):<br>
    "npm run serve" (vagy Ctrl-Shift-B -> task.json kell a minta szerinti tartalommal)<br>
    (első indítás után, ha változás történik, akkor újrafordít)
3.  Output: http://localhost:8080/
4.  Forrás állományok (pl.: *.ts, *.vue, ...) létrehozása, meglévők szerkesztése<br>
5.  Futtatás, nyomkövetés (ocionális):<br>
    Töréspontok elhelyezése helyett stabilabb a "debugger;" parancs elhelyezése a forráskódban.<br>
    Nyomkövetés indítása: F5-el<br>
    Első nyomkövetésnél: Select environment -> Chrome<br>
    Majd: launch.json beállítások bővítése: "sourceMaps": true<br>
6.  Terjesztési verzió fordítása új terminál ablakból (+ ikonnal is lehet új ablakot nyitni): (opcionális)<br>
    "npm run build"
7.  Formázási hibák ellenőrzése: (opcionális)<br>
    "npm run lint"


## Hasznos linkek:
- https://vuejs.org/
- https://vuejs.hu/
- https://vuejs.org/v2/guide/typescript.html
- https://github.com/vuejs/awesome-vue/blob/master/README.md

## Verziókezelés Git-el VS Code-ban (nagyon alap, opcionális):
1. Github account létrehozása:<br>
   https://github.com/<br>
   (nitslaszlo az account név a példában)
2. Git repository létrehozása:<br>
   pl.: GitHub asztali alkalmazással vagy github.com-on<br>
   (JedlikVueJsStarter a repository neve a példában)
3. Git konfigurálása Git CMD ablakból (1x kell csak, Windows megjegyzi):<br>
   git config --global user.email nitslaszlo@gmail.com<br>
   git config --global user.name nitslaszlo<br>
   git config --global credential.helper wincred
4. Visual Studio Code indítása - project betöltése
5. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
8. Remote repository megadása új terminál ablakból (Ctr-Shift-ö)
   - "git remote add origin https://github.com/nitslaszlo/JedlikVueJsStarter.git"
   - "git push -u origin master"

### Fel/le töltés GitHub-ra későbbiekben:
1. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
2. Változások szinkronizálása ("feltöltés"):<br>
   Alul a státus sorban balra "Synchronize Changes" -ra kattint

## VS Code editor beállítása:
1. Ctrl-Shift-P vagy F1
2. "Preferen..." gépelése
3. Preferences: "Open Workplace Settings" a projektben tárolt beállításokhoz (ez az erősebb) vagy
4. Preferences: "Open User Settings" a felhasználónált tárolt beállításokhoz<br>
   Konfig fájl workspace: projekt/.vscode/settings.json<br>
   Konfig fájl user: c:/Users/nitslaszlo/AppData/Roaming/Code/User/settings.json
