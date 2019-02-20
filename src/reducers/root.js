import storage from 'redux-persist/es/storage';
import { persistCombineReducers } from 'redux-persist';
import loadingSpinner from './loading_spinner';
import selectedCharacter from './selected_character';
import charactersList from './characters_list';
import charactersPageNumber from './characters_page_number';
import episodesLimit from './episodes_limit';
import scrollIndicator from './scroll_indicator'; 

export default persistCombineReducers({ 
	key: 'root',
	storage,
	whitelist: []
}, {
	loadingSpinner,
	selectedCharacter,
	charactersList,
	charactersPageNumber,
	episodesLimit,
	scrollIndicator
});