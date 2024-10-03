import React from "react";
import cn from 'classnames';
import styles from './Button.module.scss';

type Props = {
    text?: string,
    className?: string,
    onClick?: () => void,
    children?: React.ReactNode
}

export const Button = ({ text, className, onClick, children }: Props) => {
    return <button className={cn(styles.Button, className)} onClick={onClick}>{text || children }</button>;
}