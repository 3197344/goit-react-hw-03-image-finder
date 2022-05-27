import { Component } from 'react';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import s from "../Searchbar/Searchbar.module.css";

export class SearchBar extends Component {
    
    static propTypes = {
        onSubmit: PropTypes.func
    };

    state = {
        searchInput: '',
    };

    handlerSubmit = e => {
    e.preventDefault();

    if (this.state.searchInput.trim() === '') {
        return alert('Enter a query to search');
    // return toast.error('Enter a query to search ');
        }
        
    this.props.onSubmit(this.state.searchInput);
    this.setState({ searchInput: '' }); //очистка инпута
    };

    handlerOnChange = e => {
    this.setState({ searchInput: e.currentTarget.value.toLowerCase() });
    };

    render() {
        return (
            <header className={s.Searchbar}>
                <form  className={s.SearchForm} onSubmit={this.handlerSubmit}>
                    <button
                        type="submit"
                        className={s.SearchFormButton}
                        >
                        <span
                            className={s.SearchFormButtonLabel}>
                            Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        
                        onChange={this.handlerOnChange}
                    />
                </form>
            </header>
        );
    }
}
export default SearchBar;