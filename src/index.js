import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';

import JobsList from "./components/jobsList";
import esLocaleData from 'react-intl/locale-data/es';
import localeEsMessages from "./locales/es";

addLocaleData(esLocaleData);

ReactDOM.render(
	<IntlProvider locale="es-ES" messages= {localeEsMessages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);