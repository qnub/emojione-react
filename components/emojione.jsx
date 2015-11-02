Emojione = React.createClass({
  propTypes:{
    text: React.PropTypes.string.isRequired
  },

  getEmojifiedText(){
    let text = this.props.text || this.props.children;

    return({
      isParagraph: (text.indexOf(' ') != -1),
      content: emojione.toImage(text)
    });
  },

  render(){
    let {content, isParagraph} = this.getEmojifiedText();

    return(<div
      className={`emojione-react ${isParagraph ? 'emojione-react__with-text' : 'emojione-react__single'}`}
      dangerouslySetInnerHTML={{__html: content}}/>);
  }
});
