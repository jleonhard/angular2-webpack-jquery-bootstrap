/**
 * Created by johannes.leonhard on 31.08.17.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  public createDb() {
    const projects = [
      { id: 1, name: 'Skoda Superb Kampagne' },
      { id: 2, name: 'Skoda Fahrassistenzsysteme' },
      { id: 3, name: 'Umweltarena Solarrechner' },
      { id: 4, name: 'Samsung Hide&Seek' },
      { id: 5, name: 'SLF Whiterisk' },
      { id: 6, name: 'Raumgleiter App' }
    ];
    return projects;
  }
}
