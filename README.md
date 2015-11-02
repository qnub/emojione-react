# qnub:emojione-react

[Emojione](https://www.npmjs.com/package/emojione) wrapper for using in [react](https://atmospherejs.com/meteor/react).

## Install

    meteor add qnub:emojione-react

## Usage

    <Emojione text=":beers:"/>

or emoji with text:

    <Emojione text="My emoji :beers: text."/>

## Styling

Use general CSS for styling emojis. Emoji image itslelf have `.emojione` class. It wrapped in `div` with `.emojione-react` class. Single emoji (first usecase) have additional `.emojione-react__single` which made div displayed as `inline-block`. Emoji with text block (second usecase) have additional `.emojione-react__with-text` class.
