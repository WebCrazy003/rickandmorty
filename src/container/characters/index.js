import { connect } from "react-redux";
import { Characters } from "../../component";
import { getCharacters } from "../../action";

const mapStateToProps = state => {
  return {
    characters: state.characters,
    loading: state.loading
  };
};

const mapStateToDispatch = dispatch => ({
  onLoad: () => dispatch(getCharacters())
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Characters);
