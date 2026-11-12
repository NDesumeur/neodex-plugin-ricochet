# Ricochet

A bouncing rhythm game, in a stone courtyard lit by braziers: a spark flies from wall to wall, and each bounce rings a gong to the beat of the music. Hit the arrow of the wall it is about to touch, right when it touches it. No scrolling notes here: the rhythm is read in the path. Play the 1200 tracks from the Rythme plugin, or your own music.

*Version française : [README.md](README.md)*

## How to play

- **Left wall**: **←** or **D** · **bottom wall**: **↓** or **F** · **top wall**: **↑** or **J** · **right wall**: **→** or **K**.
- **Reading the path**: the spark's direction tells which wall, its speed tells when. The sharp gong is the next target, the two faint gongs come after, and a dotted line shows the way.
- Two bounces in a row on the **same wall**: the spark arcs toward the center of the courtyard.
- **Golden slides**: on long notes, the spark slides along the wall. Hit the start, then **hold the key down** to the end: every tenth of a second held scores.
- Hitting the wrong wall does nothing: the spark goes by and the bounce is a miss.
- With the **mouse** or a **finger**: touch the screen near the wall (a finger kept down holds slides).
- **Space**: play · **P**: pause · **Full screen** during the game.

## Accuracy and points

Notes are judged by how far they are from the right moment: **Perfect** (about ±45 ms), **Good** (±90 ms), **OK** (±140 ms), otherwise a miss.

A note's points rise by 1 % per note of combo, up to double at 100 notes in a row; a miss resets the combo. At the end, accuracy gives a grade: **S** from 95 %, **A** at 90 %, **B** at 80 %, **C** at 70 %, **D** below.

## Songs and difficulty

The **Songs** tab has the 1200 Rythme tracks, in four difficulties (Easy, Normal, Hard, Expert). Each level's difficulty is computed from its notes (density, busy passages, wall changes), from 1 to 10 stars.

## My music

In **My music**, create a level from an imported **audio file** or a track from your **NeoMusic** library: the game finds its tempo and strong beats and turns them into a level, at the chosen **difficulty** (1 to 10 stars).

## Settings

- Music **volume**.
- **Hit sound**: the sound played on each note you hit, one of 10 (Soft, Clap, Wood, Kick, Crystal, Pop, Hi-hat, Snare, Pluck, Tock) or none. Losing a combo of 10 or more plays a « combo break » sound.
- **Offset** (−300 to +300 ms): it adjusts itself after each game based on your average lateness or earliness; you can also change it by hand.

## Data and sync

Your scores and grades per level and your settings are stored by NeoDex, backed up and synced between your PCs when sync is on.

## Install

In NeoDex: **NeoStore → Discover → Ricochet → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
