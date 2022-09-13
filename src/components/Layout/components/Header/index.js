import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn} from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import images from "~/assets/images";
import {useEffect, useState} from "react";
import { Wrapper as PoperWrapper} from "~/components/Layout/Proper";
import AccountItem from "~/components/Layout/components/AccountItem";
import Button from "~/components/Button";

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0)
    }, []);

    return (
        <header className={styles['wrapper']}>
            <div className={styles['inner']}>
                <div className={styles['logo']}>
                    <img src={images.logo} alt="Tiktok-logo"/>
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={attrs => (
                        <div className={styles['search-result']} tabIndex="-1" {...attrs}>
                            <PoperWrapper>
                                <h4 className={styles['search-title']}>
                                    Account
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PoperWrapper>
                        </div>

                )}>
                    <div className={styles['search']}>
                    <input type="text" placeholder="Search accounts and videos" spellCheck="false"/>
                    <button className={styles['clear']}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={styles['loading']} icon={faSpinner} />
                    <button className={styles['search-btn']}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                </Tippy>
                <div className={styles['action']}>
                    <Button text>
                        Upload
                    </Button>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Login
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;