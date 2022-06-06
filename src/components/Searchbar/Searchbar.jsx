import { Component } from 'react';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import s from "../Searchbar/Searchbar.module.css";

export class SearchBar extends Component {
    state = {
        searchInput: '',
    };
    
    static propTypes = {
        handlerSubmit: PropTypes.func.isRequired,
    };

    handleSearch = e => {
    this.setState({ searchInput: e.currentTarget.value.toLowerCase() });
    };

    onSubmit = e => {
        e.preventDefault();
        const { searchInput } = this.state;
        const { handlerSubmit } = this.props;
        if (searchInput.trim() === '') {
            return alert('Enter a query to search');
            // return toast.error('Enter a query to search ');
        }
        handlerSubmit(searchInput);
    };

    render() {
        const { searchInput } = this.state;
        return (
            <header className={s.Searchbar}>
                <form
                    className={s.SearchForm}
                    onSubmit={this.onSubmit}>
                    <input
                        className={s.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchInput }
                        onChange={this.handleSearch}
                    />

                    <button
                        type="submit"
                        className={s.SearchFormButton}
                        >
                        <span
                            className={s.SearchFormButtonLabel}>
                            Search</span>
                    </button>
                </form>
            </header>
        );
    }
}
export default SearchBar;