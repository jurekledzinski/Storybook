import styles from './TableDocs.module.css';
import { colorsData, headerData } from '../utils';

export const TableDocs = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            {headerData.map((item) => (
              <th className={styles.th} key={item} scope="col">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {colorsData.map((item) => (
            <tr key={item.hue} className={styles.tr}>
              <td className={styles.td} scope="row">
                {item.hue}
              </td>
              <td className={styles.td}>{item.color}</td>
              <td className={styles.td}>{item.hsl}</td>
              <td className={styles.td}>{item.hex}</td>
              <td className={styles.td}>
                <span className={styles.sample} style={{ backgroundColor: item.hex }}></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
