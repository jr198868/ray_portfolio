import React from 'react';
import aboutmeImage from '../../assets/kkk.png';
import './Radar.css';

import { LineChart, Line, RadialBar, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis
  } from "recharts";

const data = [
	{
		subject: 'Math', A: 72, B: 110, fullMark: 150,
	},
	{
		subject: 'Statistics', A: 85, B: 130, fullMark: 150,
	},
	{
		subject: 'Modelling', A: 80, B: 130, fullMark: 150,
	},
	{
		subject: 'Data mining', A: 95, B: 100, fullMark: 150,
	},
	{
		subject: 'Data visualization', A: 95, B: 85, fullMark: 150,
	},
	{
		subject: 'Machine learning', A: 75, B: 90, fullMark: 150,
	},
	{
		subject: 'SQL/NoSQL', A: 65, B: 75, fullMark: 150,
	},

];




const aboutme = () => (
  <div className="ray__aboutme section__padding" id="aboutme">

	<div className="ray__aboutme-image">

		<RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
			<PolarGrid />
			<PolarAngleAxis dataKey="subject" />
			<PolarRadiusAxis />
			<Radar name="Mike" dataKey="A" stroke="#696969" fill="#40E0D0" fillOpacity={0.5} />
		</RadarChart>

    </div>

    <div className="ray__aboutme-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default aboutme;

