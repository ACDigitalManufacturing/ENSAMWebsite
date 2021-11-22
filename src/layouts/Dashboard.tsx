import SideMenu from "components/layouts/SideMenu"
import styles from "./styles/dashboard.module.scss"

interface Props {
  children: JSX.Element
}
function Dashboard({ children }: Props): JSX.Element {
  return (
    <div className={styles.dashboardLayoutWrapper}>
      <SideMenu />
      <section className={styles.mainSection}>{children}</section>
    </div>
  )
}

export default Dashboard
