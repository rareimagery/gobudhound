calss Message extends React.Component {
    render () {
    return  (
    <div>
      <div>text: {this.props.type}</div>
    </>
  );
}
}

Message.propTypes. = {
    text: React.porpTypes.stirng
};
