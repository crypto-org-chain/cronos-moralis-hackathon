import { Fragment } from 'react';
import HoverSpring from './HooverSpringWrapper';
import styles from '../styles/HoverSpring.module.css';
import polygonLeft from '/polygon-left.svg';
import polygonFull from '/polygon-full.svg';
import polygonRight from '/polygon-right.svg';

const rangeMultiplier = 5;

const HooverSpringer: React.FC = (): JSX.Element => {

    return (
        <Fragment>
            <HoverSpring
                customStyles={{
                    position: 'absolute',
                    left: '-80px',
                    top: '100px',
                }}
            >
                <img
                    src={'/polygon-left.svg'}
                    className={styles.leftLg}
                    alt="polygon-left" />
            </HoverSpring><HoverSpring
                customStyles={{
                    position: 'absolute',
                    left: '220px',
                    top: '420px',
                }}
                range={4 * rangeMultiplier}
            >
                <img
                    src={'/polygon-full.svg'}
                    className={styles.leftSm}
                    alt="polygon-left-small" />
            </HoverSpring><HoverSpring
                customStyles={{
                    position: 'absolute',
                    right: '220px',
                    top: '100px',
                }}
                range={8 * rangeMultiplier}
            >
                <img
                    src={'/polygon-full.svg'}
                    className={styles.rightSm1}
                    alt="polygon-right-small" />
            </HoverSpring><HoverSpring
                customStyles={{
                    position: 'absolute',
                    right: '180px',
                    top: '200px',
                }}
                range={4 * rangeMultiplier}
            >
                <img
                    src={'/polygon-full.svg'}
                    className={styles.rightSm2}
                    alt="polygon-right-small" />
            </HoverSpring><HoverSpring
                customStyles={{
                    position: 'absolute',
                    right: '380px',
                    bottom: '50px',
                }}
                range={8 * rangeMultiplier}
            >
                <img
                    src={'/polygon-full.svg'}
                    className={styles.rightSm3}
                    alt="polygon-right-small" />
            </HoverSpring><HoverSpring
                customStyles={{
                    position: 'absolute',
                    right: '-200px',
                    bottom: '-260px',
                }}
                range={4 * rangeMultiplier}
            >
                <img
                    src={'/polygon-right.svg'}
                    className={styles.rightLg}
                    alt="polygon-right-full" />
            </HoverSpring>
        </Fragment>
    )
}

export default HooverSpringer;