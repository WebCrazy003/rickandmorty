import { connect } from "react-redux";
import { CharacterList } from "../../component";
import { getCharacterList } from "../../action";

const mapStateToProps = state => {
  return {
    characters: state.characters,
    loading: state.loading
  };
};

const mapStateToDispatch = dispatch => ({
  onLoad: () => dispatch(getCharacterList())
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(CharacterList);
