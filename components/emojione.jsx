Emojione = React.createClass({
  propTypes:{
    text: React.PropTypes.string,
    escapeHTML: React.PropTypes.bool
  },

  getDefaultProps(){
    return({
      escapeHTML: true
    });
  },

  getEmojifiedText(){
    let text = this.props.text;

    if (!text){
      return({
        isParagraph: false,
        content: null
      });
    }

    if (this.props.escapeHTML){
      text = emojione.escapeHTML(text);
    }

    return({
      isParagraph: (text.indexOf(' ') != -1),
      content: emojione.toImage(text)
    });
  },

  render(){
    const {content, isParagraph} = this.getEmojifiedText();

    if (!content){
      return(null);
    }

    return(<div
      className={`emojione-react ${isParagraph ? 'emojione-react__with-text' : 'emojione-react__single'}`}
      dangerouslySetInnerHTML={{__html: content}}/>);
  }
});
