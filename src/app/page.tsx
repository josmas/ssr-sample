import styles from "./page.module.css";
import HomeComponent from "./components/CustomButton";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Which cat you like best? Clicking does nothing, in any case!</p>
        <HomeComponent cats={data} />
      </div>
    </main>
  );
}
