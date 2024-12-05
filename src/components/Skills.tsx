import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='container pt-32' >
        <div className='grid md: grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl'>Technologies </h2>
                <p className='text-gray-300 pt-2'>I possess a strong blend of skills in both web design and Geographic Information Systems (GIS). In web design, I am proficient in HTML, CSS, and JavaScript, with experience in responsive design, UI/UX principles, and using tools like Adobe XD and Figma for creating visually appealing and user-friendly websites. In GIS, I am skilled in spatial data analysis, using platforms like ArcGIS and QGIS for mapping, geospatial data visualization, and geospatial analysis. I am also adept at integrating GIS data into web applications, providing dynamic, interactive maps and location-based services to enhance user experiences.
</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="flip-left">HTML</h2>
                        <h2 data-aos="flip-left">CSS</h2>
                        <h2 data-aos="flip-left">JavaScript</h2>
                        <h2 data-aos="flip-left">React.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="flip-left">ArcGIS</h2>
                        <h2 data-aos="flip-left">QGIS</h2>
                        <h2 data-aos="flip-left">GoogleEarth</h2>
                        <h2 data-aos="flip-left">EarthExplorer</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
