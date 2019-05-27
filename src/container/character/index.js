import { connect } from "react-redux";
import { Character } from "../../component";
import { getCharacter } from "../../action";

const mapStateToProps = state => {
  return {
    character: state.character,
    loading: state.loading
  };
};

const mapStateToDispatch = dispatch => ({
  onLoad: id => dispatch(getCharacter(id))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Character);
