// const emojione = Npm.require('emojione');

Emojione = React.createClass({
  propTypes:{
    text: React.PropTypes.string
  },

  getShortName(){
    let shortName = this.props.shortName.trim();

    if (!shortName){
      return;
    }

    if (shortName[0] != ':'){
      shortName = `:${shortName}`;
    }

    if (shortName[-1] != ':'){
      shortName = `${shortName}`;
    }

    return(shortName);
  },

  getEmojifiedText(){
    // let shortName = this.getShortName();
    // let isParagraph = !!shortName;
    let text = this.props.text || this.props.children;
    // let content = '';
    //
    // if (isParagraph && text){
    //   console.log(text);
    // } else {
    //   content = emojione.toStr(shortName);
    // }

    return({
      isParagraph: (text.indexOf(' ') != -1),
      content: emojione.toImage(text)
    });
  },

  render(){
    let {content, isParagraph} = this.getEmojifiedText();
    //
    // if (!content){
    //   return(undefined);
    // }


    return(<div
      className={`emojione-react ${isParagraph ? 'emojione-react__with-text' : 'emojione-react__single'}`}
      dangerouslySetInnerHTML={{__html: content}}/>);
  }
});
