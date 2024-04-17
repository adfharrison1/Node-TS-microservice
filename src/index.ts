import express from 'express';
import {outagesController, siteInfoController, siteOutagesController} from './web/controllers';


const app = express();
const port = Number(process.env.PORT || 3000);

app.use(outagesController({ router: express.Router() }));
app.use(siteInfoController({ router: express.Router() }));
app.use(siteOutagesController({ router: express.Router() }));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
