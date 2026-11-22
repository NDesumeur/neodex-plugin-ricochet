# Ricochet

Un jeu de rythme en rebonds, dans une cour de pierre éclairée par des braseros : une étincelle file d'un mur à l'autre, et chaque rebond sonne un gong au rythme de la musique. Frappe la flèche du mur qu'elle va toucher, au moment où elle le touche. Ici, pas de notes qui défilent : le rythme se lit dans la trajectoire. Joue les 1200 morceaux du plugin Rythme, ou ta propre musique.

*English version: [README.en.md](README.en.md)*

## Comment jouer

- **Mur de gauche** : **←** ou **D** · **mur du bas** : **↓** ou **F** · **mur du haut** : **↑** ou **J** · **mur de droite** : **→** ou **K**.
- **Lire la trajectoire** : la direction de l'étincelle dit quel mur, sa vitesse dit quand. Le gong net est la prochaine cible, les deux gongs pâles viennent ensuite, et un pointillé montre le trajet.
- Deux rebonds de suite sur le **même mur** : l'étincelle fait un arc vers le centre de la cour.
- **Glissades dorées** : sur les notes longues, l'étincelle glisse le long du mur. Frappe le début, puis **garde la touche enfoncée** jusqu'au bout : chaque dixième de seconde tenu rapporte.
- Frapper le mauvais mur ne compte pas : l'étincelle passe et le rebond est raté.
- À la **souris** ou au **doigt** : touche l'écran près du mur visé (le doigt posé tient les glissades).
- **Espace** : jouer · **P** : pause · **Plein écran** pendant la partie.

## Précision et points

Les notes sont jugées selon l'écart avec le bon moment : **Parfait** (environ ±45 ms), **Bien** (±90 ms), **OK** (±140 ms), sinon raté.

Les points d'une note augmentent de 1 % par note de combo, jusqu'au double à 100 notes de suite ; une note ratée remet le combo à zéro. À la fin, la précision donne une note : **S** à partir de 95 %, **A** à 90 %, **B** à 80 %, **C** à 70 %, **D** en dessous.

## Chansons et difficulté

L'onglet **Chansons** reprend les 1200 morceaux de Rythme, en quatre difficultés (Facile, Normal, Difficile, Expert). La difficulté de chaque niveau est calculée d'après ses notes (densité, passages chargés, changements de mur), de 1 à 10 étoiles.

## Mes musiques

Dans **Mes musiques**, crée un niveau à partir d'un **fichier audio** importé ou d'une musique de ta bibliothèque **NeoMusic** : le jeu trouve son tempo et ses temps forts et en fait un niveau, à la **difficulté** choisie (1 à 10 étoiles).

## Réglages

- **Volume** de la musique.
- **Son des clics** : le son joué à chaque note touchée, au choix parmi 10 (Doux, Clap, Bois, Grosse caisse, Cristal, Pop, Charleston, Caisse claire, Pluck, Tok) ou aucun. Perdre un combo de 10 ou plus joue un son « combo cassé ».
- **Décalage** (−300 à +300 ms) : il se règle tout seul après chaque partie selon ton retard ou ton avance moyens ; tu peux aussi le changer à la main.

## Données et synchronisation

Tes scores et notes par niveau et tes réglages sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Ricochet → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).

## Décors, manette et courbe de précision

- **La cour change selon le morceau** : cour de briques, temple, jardin japonais au sable ratissé, ou glace.
- **Manette** : la croix, ou les boutons X, A, Y et B, frappent les murs gauche, bas, haut et droit. Start lance le morceau, Select met en pause.
- **Écran de fin** : une courbe montre la précision le long du morceau, avec les notes ratées en rouge.

## Deux étincelles

Dans les réglages, « Étincelles : 2 » lance une deuxième étincelle, bleue, en plus de l'orange. Chacune suit son propre chemin et ses propres gongs (les gongs bleus sont pour la bleue). Les accords du morceau deviennent deux rebonds en même temps sur deux murs différents. Les records à deux étincelles sont gardés à part.

## Les cours et les murs mobiles

L'option « Cour » choisit la forme : selon le morceau, rectangle, hexagone ou triangle. Chaque touche garde son côté : ← pour les murs de gauche, → pour ceux de droite, ↑ pour le haut, ↓ pour le bas ; dans l'hexagone, la gauche et la droite ont chacune deux murs, et le triangle n'a pas de mur du haut. Chaque forme a ses propres records. L'option « Murs : Mobiles » fait respirer la cour : elle se resserre et s'élargit lentement, avec un petit coup sur chaque temps.
