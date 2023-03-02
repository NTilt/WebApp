import styles from './Footer.module.scss'

function Footer() {
    return(
        <footer>
            <div className={styles.footer}>
                <div className={styles.footer_footer_left}>
                    <p>2022 © ГУЗ «Областной клинический онкологический диспансер»</p>
                    <p className={styles.red_text}>Политика конфиденциальности</p>
                </div>
                <div className={styles.footer_footer_right}>
                    <img src="images/logo_telegram.png" className={styles.logo_tg} />
                    <img src="images/logo_vk.png" className={styles.logo_vk} />
                    <img src="images/logo_youtube.png" className={styles.logo_yt} />
                    <p className={styles.footer_footer_right_name}>Разработка сайта</p>
                    <img src="images/logo_spaceapp.png" className={styles.logo_spaceapp} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;