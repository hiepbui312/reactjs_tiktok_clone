import styles from './Button.module.scss';
import {Link} from "react-router-dom";

function Button(
    {
        to,
        href,
        primary = false,
        outline = false,
        size= 'medium',
        children, onClick,
        disabled,
        rounded,
        className,
        text,
        leftIcon,
        rightIcon,
        ...passProps
    })
{
    let Component = 'button';
    const props = {
        onClick,
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    let classes = styles['wrapper'] + ' ' + styles[size];

    if (primary) {
        classes += ' ' + styles['primary'];
    } else if (outline) {
        classes += ' ' + styles['outline'];
    } else if (text) {
        classes += ' ' + styles['text'];
    } else if (rounded) {
        console.log(456);
        classes += ' ' + styles['rounded'];
    }

    if (className) {
        classes += ' ' + styles[[className]];
    }

    //remove event listener when button disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });

        classes += ' ' + styles['disabled'];
    }

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={styles['icon']}>{leftIcon}</span>}
            <span className={styles['title']}>{children}</span>
            {rightIcon && <span className={styles['icon']}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;