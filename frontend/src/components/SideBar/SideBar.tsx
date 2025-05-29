import React from 'react';
import styles from './SideBar.module.scss';

interface SideBarProps {
    onButtonClick?: (buttonId: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onButtonClick }) => {
    const button = {
        id: 'newGame',
        label: 'New Game',
        icon: '🎮',
        description: 'Start a new game'
    };

    return (
        <div className={styles.sidebar}>
            <button
                className={styles.button}
                onClick={() => onButtonClick?.(button.id)}
                title={button.description}
            >
                <span className={styles.icon}>{button.icon}</span>
                <span className={styles.label}>{button.label}</span>
            </button>
        </div>
    );
};

export default SideBar;
