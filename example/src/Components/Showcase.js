import React from 'react'
import { Container } from 'glassmass'
import styles from './components.module.css'

function Showcase({ title, text, codeImg, comp, compProps }) {
  const root = {
    //  display: 'flex'
  }

  const comp_container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }

  const img_style = {
    /*position: 'relative',
    top: '9rem',
    left: 0,*/
    marginTop: '1.5rem',
    width: '40rem'
  }

  const aritcle_section = {
    flex: '1',
    padding: '1rem 2rem'
  }

  const table_style = {
    root: {
      minHeight: '60vh',
      padding: '1.5rem'
    },
    title: {
      marginBottom: '1rem'
    },
    table_row: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      margin: '1rem 0',
      borderBottom: '1px solid rgba(255,255,255,0.4)',
      padding: '0.5rem 0'
    },
    table_itemName: {
      width: '40%'
    },
    table_itemDesc: {
      width: '60%'
    }
  }

  return (
    <article className={styles.components} style={root}>
      <div style={aritcle_section}>
        <div style={comp_container}>
          {comp}
          <img style={img_style} src={codeImg} alt='Code Example' />
        </div>
      </div>
      <div style={aritcle_section}>
        <Container style={table_style.root}>
          <h3 style={table_style.title}>PROPS</h3>
          <article>
            <div style={table_style.table_row}>
              <h4 style={table_style.table_itemName}>NAME</h4>
              <h4 style={table_style.table_itemDesc}>DESCRIPTION</h4>
            </div>

            <div style={table_style.table_row}>
              <p style={table_style.table_itemName}>style</p>
              <p style={table_style.table_itemDesc}>type: Object</p>
            </div>
            <div style={table_style.table_row}>
              <p style={table_style.table_itemName}>className</p>
              <p style={table_style.table_itemDesc}>type: String</p>
            </div>

            {compProps.map((compProp) => (
              <div style={table_style.table_row} key={compProp.name}>
                <p style={table_style.table_itemName}>{compProp.name}</p>
                <p style={table_style.table_itemDesc}>{compProp.desc}</p>
              </div>
            ))}
          </article>
        </Container>
      </div>
    </article>
  )
}

export default Showcase
