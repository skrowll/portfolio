"use client";

import styles from './NextArrow.module.scss';

export default function NextArrow(NextArrowProps) {
  return (
    <a href={ NextArrowProps.href } className={ styles.next }></a>
  )
}