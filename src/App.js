import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Contact from '@material-ui/icons/Contacts';
import Star from '@material-ui/icons/Star';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dash from '@material-ui/icons/Dashboard';

import { Progress, Drawer, Row, Col } from 'antd'
import './App.css';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
const drawerWidth = "70px"

class App extends Component {
  constructor() {
    super()
    this.state = {
      visibleAbout: false,
      visibleConquests: false,
      visibleLeft: false,
      regra: 2,
      socialText: 'Email: harysonjherson@gmail.com'
    }
    this.desktop = document.getElementsByTagName('body')[0].clientWidth > document.getElementsByTagName('body')[0].clientHeight
  }
  componentDidMount() {
    setTimeout(_ => {
      const inter = setInterval(_ => {
        this.setState({ regra: this.state.regra + Math.round(this.state.regra * 5) })
        if (this.state.regra >= 100)
          clearInterval(inter);
      }
        , 1);
    }, 500)
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="App" style={{ width: "98%" }}>
        <CssBaseline />
        <AppBar
          id="header"
          position="fixed"
          style={{ height: "60px" }}
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar >
            <IconButton
              color="inherit"
              onClick={_ => this.setState({ visibleLeft: true })}
              style={{ marginLeft: '-10px', marginRight: "15px" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography>
              <span style={{ fontSize: "25px", color: "white" }}>J. Haryson</span>
            </Typography>
            {/* <Typography style={{ width: "10px" }}> </Typography>
            <Typography className="line anim-typewriter" color="inherit" component="div" noWrap>
              <p style={{ fontSize: "14px" }} className="line anim-typewriter">Web Developer   </p>
            </Typography> */}
            <div style={{ position: "absolute", right: "0px" }}>
              <IconButton
                color="inherit"
                onClick={_ => this.setState({ visibleAbout: true })}
              >
                <Contact />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={_ => this.setState({ visibleConquests: true })}
              >
                <Star />
              </IconButton>
              <IconButton
                color="inherit"
              >
                <a href="https://github.com/jhersonharyson"
                  target="_blank" rel="noopener noreferrer">
                  <img alt="" style={{ width: "40px", margin: "0px" }} src={require('./icons/github.png')}></img>
                </a>
              </IconButton>
            </div>
          </Toolbar>

          <Drawer
            className="drawer"
            title="CONQUISTAS"
            placement={"left"}//this.desktop ? "left" : "bottom"}
            width={this.desktop ? "20%" : "75%"}
            height="85%"
            closable={true}
            push
            onClose={_ => this.setState({ visibleLeft: false })}
            visible={this.state.visibleLeft}
            style={{padding: "0px", paddingTop: "0px"}}
          >
            {/* <h2>Contatos</h2> */}
            {/* <h3>Conquistas</h3> */}
            <List component="nav" >
              <ListItem button>
                <ListItemIcon>
                  <Dash />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </List>



          </Drawer>

        </AppBar>

        <div style={{ marginTop: "70px", justifyContent: "space-around", display: "flex", flexWrap: "wrap", flexGrow: 1, alignItems: "flex-start" }} >
          <Dialog
            className="drawer"
            title="MAIS DETALHES"
            placement={this.desktop ? "right" : "bottom"}
            width="85%"
            height="85%"
            closable={true}
            push
            onClose={_ => this.setState({ visibleAbout: false })}
            open={this.state.visibleAbout}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Jherson Haryson Almeida Pereira"}</DialogTitle>
            <DialogContent>
              {/* <Button style={{ position: "absolute", right: 0, bottom: 0, marginRight: "30px", marginBottom: "30px" }} onClick={_ => this.setState({ visibleAbout: false })}> Voltar</Button> */}
              <h2>Sobre</h2>
              <DialogContentText id="alert-dialog-description" style={{ textAlign: "justify" }}>
                Atualmente é estagiario em desenvolvimento web Fullstack java na TOTVS,
                    trabalhando em projetos de soluções bancárias e internas,
                    faz parte do Programa de Iniciação Ciêntifica da Universidade Federal do Estado do Pará na area de pesquisa volta a aplicação de neuroevolução computacional e inteligencia artificial.
                    Atuou como instrutor de informática e monitor das disciplinas de Introdução à Programação e Programação Aplicada em C++ do curso de Engenharia de Computação do Centro Universitário do Estado do Pará;
                    Atualmente cursa Engenharia da Computação na instituição de ensino Cesupa e Sistemas de Informação pela Universidade Federal do Pará.
                    Tem experiência na área de Engenharia da Computação, com ênfase em Programação e Desenvolvimento de Projetos de Automação e Robótica utilizando micro-controladores,
                    desenvolvimento de aplicações mobile e desktop. Membro Fundador do Grupo de Estudos de Automação e Robótica (Cesupa).
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={_ => this.setState({ visibleAbout: false })} color="primary">
                VOLTAR
            </Button>
            </DialogActions>
          </Dialog>






          <Dialog
            className="drawer"
            title="CONQUISTAS"
            placement={this.desktop ? "right" : "bottom"}
            width="85%"
            height="85%"
            closable={true}
            push
            onClose={_ => this.setState({ visibleConquests: false })}
            open={this.state.visibleConquests}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Jherson Haryson Almeida Pereira"}</DialogTitle>
            <DialogContent>
              <h2>Conquistas</h2>
              <DialogContentText id="alert-dialog-description">
                <Row gutter={30}>
                  <Col span="8">
                    <p align="center"><img alt="" src={require('./icons/medalha.png')}></img></p>
                    <p align="justify">Primeiro Lugar no evento de tecnologia Computação Amostra (Cesupa) em 2016.</p>
                  </Col>
                  <Col span="8">
                    <p align="center"><img alt="" src={require('./icons/medalha.png')}></img></p>
                    <p align="justify">Segundo Lugar no evento de tecnologia Computação Amostra (Cesupa) em 2017.</p>
                  </Col>
                  <Col span="8">
                    <p align="center"><img alt="" src={require('./icons/medalha.png')}></img></p>
                    <p align="justify">Primeiro Lugar no evento de tecnologia Computação Amostra (Cesupa) em 2018.</p>
                  </Col>
                </Row>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={_ => this.setState({ visibleConquests: false })} color="primary">
                VOLTAR
            </Button>
            </DialogActions>
          </Dialog>

          <div style={{ display: "flex", flexDirection: this.desktop ? "column" : "row" }}>

          </div>
          <Card className={classes.card} style={{ marginTop: "15px" }} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="J. Haryson"
                className={classes.media}
                height="360px"
                image={require('./icons/foto.jpeg')}
                title="J. Haryson"

              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  J. Haryson
                </Typography>
                <Typography gutterBottom className={classes.pos} color="textSecondary">
                  Web Developer
                </Typography>
                <Typography component="ul" align="justify">
                  <li>Acadêmico de Engenharia da Computação e Sistemas de Informação</li>
                  {/* <li>Desenvolvedor Desktop, Mobile e Web</li> */}
                  <li>Desenvolvedor Fullstack Front-End Javascript</li>
                  <li>Desenvolvedor Web Fullstack</li>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button size="small" color="primary">
                COMPARTILHAR
            </Button> */}
              <Button size="small" color="primary" onClick={_ => { this.setState({ visibleAbout: true }) }}>
                MAIS DETALHES
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.card} style={{ marginTop: "15px" }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Minhas Habilidades
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Programação
              </Typography>
              <Typography component="div" align="left">
                <Row style={{ marginTop: "15px" }}>
                  <IconGrid text="Java" url={require("./icons/java.png")} percent={(75 - this.state.regra) >= 0 ? this.state.regra : 75} />
                  <IconGrid text="Javascript" url={require("./icons/javascript.png")} percent={(80 - this.state.regra) >= 0 ? this.state.regra : 80} />
                </Row>
                <Row style={{ marginTop: "15px" }}>
                  <IconGrid text="AngularJs" url={require("./icons/angularjs.png")} percent={(65 - this.state.regra) >= 0 ? this.state.regra : 65} />
                  <IconGrid text="ReactJs" url={require("./icons/react.png")} percent={(90 - this.state.regra) >= 0 ? this.state.regra : 85} />
                </Row>
                <Row style={{ marginTop: "15px" }}>
                  <IconGrid text="Node" url={require("./icons/nodejs.png")} percent={(70 - this.state.regra) >= 0 ? this.state.regra : 70} />
                  <IconGrid text="PHP" url={require("./icons/php.png")} percent={(55 - this.state.regra) >= 0 ? this.state.regra : 55} />
                </Row>
                <Row style={{ marginTop: "15px" }}>
                  <IconGrid text="C/C++" url={require("./icons/c.png")} percent={(90 - this.state.regra) >= 0 ? this.state.regra : 90} />
                  <IconGrid text="Qt" url={require("./icons/qt.png")} percent={(90 - this.state.regra) >= 0 ? this.state.regra : 90} />
                </Row>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">MAIS DETALHES</Button>
            </CardActions>
          </Card>

          <div>
            <Card className={classes.card} style={{ marginTop: "15px" }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Minhas Habilidades
              </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Elétrica
              </Typography>
                <Typography component="div" align="left">
                  <Row style={{ marginTop: "15px" }}>
                    <IconGrid text="Microcontroladores" url={require("./icons/microcontroladores.png")} percent={(75 - this.state.regra) >= 0 ? this.state.regra : 75} />
                    <IconGrid text="AutoCAD 2D" url={require("./icons/autocad.png")} percent={(80 - this.state.regra) >= 0 ? this.state.regra : 80} />
                  </Row>
                  <Row style={{ marginTop: "15px" }}>
                    <IconGrid text="Eletrônica" url={require("./icons/eletronica.png")} percent={(65 - this.state.regra) >= 0 ? this.state.regra : 65} />
                    <IconGrid text="Elétrica" url={require("./icons/eletrica.png")} percent={(85 - this.state.regra) >= 0 ? this.state.regra : 85} />
                  </Row>
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small" color="primary">MAIS DETALHES</Button> */}
              </CardActions>
            </Card>


            <Card className={classes.card} style={{ marginTop: "15px" }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Entre em Contato
              </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Redes Sociais e Contatos
              </Typography>
                <Typography component="div" align="left">
                  <Row style={{ marginTop: "15px", justifyContent: "center", display: "flex" }}>
                    <Col span="4">
                      <a href="https://github.com/jhersonharyson"
                        target="_blank" rel="noopener noreferrer"><img alt="" src={require("./icons/github.png")} /></a>
                    </Col>
                    <Col span="4">
                      <a href="https://www.linkedin.com/in/jherson-haryson-6b9940151/"
                        target="_blank" rel="noopener noreferrer"><img alt="" src={require("./icons/linkedin.png")} /></a>
                    </Col>
                    <Col span="4">
                      <a href="https://www.facebook.com/jherson.k.f" target="_blank" rel="noopener noreferrer"><img alt="" src={require("./icons/facebook.png")} /></a>
                    </Col>
                    <Col span="4">
                      <a href="https://jhersonharyson.github.io"
                        target="_blank" rel="noopener noreferrer"><img alt="Site" src={require("./icons/site.png")} /></a>
                    </Col>
                    <Col span="4" onClick={_ => this.setState({ socialText: "Email: harysonjherson@gmail.com" })}>
                      <img alt="" src={require("./icons/email.png")} />
                    </Col>
                    <Col span="4" onClick={_ => this.setState({ socialText: "Tel: (91) 98194-2997" })}>
                      <img alt="" src={require("./icons/phone.png")} />
                    </Col>

                  </Row>
                  <Row>

                  </Row>
                </Typography>
              </CardContent>
              <h2>{this.state.socialText}</h2>
            </Card>
          </div>
          <Card className={classes.card} style={{ marginTop: "15px", marginBottom: "25px" }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Ultimos Trabalhos
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Links de alguns projetos e desenvolvidos
              </Typography>
              <Typography component="div" align="left">
                <Row style={{ marginTop: "15px", justifyContent: "center", display: "flex", flexDirection: "column", }}>
                  <Row>
                    <Row style={{ justifyContent: "center", display: "flex" }}>
                      <p align="center'">
                        <a href="https://jhersonharyson.github.io/analisador-lexico/v2"
                          target="_blank" rel="noopener noreferrer"><img alt="" src={require("./icons/github.png")} /></a>
                      </p>
                      <p align="center'">
                        <a href="https://jhersonharyson.github.io/analisador-sintatico"
                          target="_blank" rel="noopener noreferrer"><img alt="" src={require("./icons/github-4.png")} /></a>
                      </p>
                      <p align="center'">
                        <a href="https://jhersonharyson.github.io/sistema-especialista"
                          target="_blank" rel="noopener noreferrer"><img alt="" src={require("./icons/github-3.png")} /></a>
                      </p>
                      <p align="center">
                        <a href="http://empresaciad.000webhostapp.com/"
                          target="_blank" rel="noopener noreferrer">
                          <img alt="" src={require("./icons/ciad.png")} style={{ width: 45 }} /></a>
                      </p>
                      <p align="center">
                        <a href="https://www.mercadaodosparabrisas.com.br" target="_blank" rel="noopener noreferrer">
                          <img alt="" src={require("./icons/mp.png")} style={{ width: 45 }} /></a>
                      </p>
                      <p align="center">
                        <a href="https://www.mercadaodosparabrisas.com.br" target="_blank" rel="noopener noreferrer">
                          <img alt="" src={require("./icons/ec.png")} style={{ width: 45 }} /></a>
                      </p>
                    </Row>
                    <Row>
                      <p align="center">Freelacer</p>
                    </Row>
                  </Row>
                  <p align="center">
                    <img alt="" src={require("./icons/totvs.png")} style={{ width: 125 }} /></p>
                  <p align="center">Estagiário em Desenvolvedor Web Fullstack Java</p>

                  <p align="center">
                    <img alt="" src={require("./icons/ufpa.png")} style={{ height: 70 }} /></p>
                  <p align="center">Iniciação cientifica na área de neuroevolução compuacional</p>

                </Row>
              </Typography>
            </CardContent>
          </Card>
        </div>

      </div>
    );
  }
}

const IconGrid = ({ text, url, percent, one }) => {

  return <div>
    <Col span="12">
      <Row gutter={30}>
        <Col span="12">
          <Progress type="circle" percent={percent} width={55} strokeWidth={1} />
        </Col>
        <Col span="12">
          <img alt={text} src={url} />
        </Col>
      </Row>
      <p align="center" style={{ marginTop: "5px", fontWeight: "450" }}>{text}</p>
    </Col>
  </div>
}
// eslint-disable-next-line
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  card: {
    // maxWidth: 400,
    width: 400,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
});



export default withStyles(styles, { withTheme: true })(App);;
