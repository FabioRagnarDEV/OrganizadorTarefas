import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Modal,
  IconButton,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';

function createData(
  idTarefa,
  tituloTarefa,
  descricaoTarefa,
  inicioTarefa,
  fimTarefa,
  statusTarefa,
  recursoTarefa
) {
  return { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa };
}

const initialRows = [
  createData(1, 'Tarefa 1', 'Descrição da Tarefa 1', '2022-01-01', '2022-01-02', 'Concluída', 'Recurso 1'),
  createData(2, 'Tarefa 2', 'Descrição da Tarefa 2', '2022-01-03', '2022-01-04', 'Em Andamento', 'Recurso 2'),
  // ... Mais dados
];

const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState();
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState([]);

  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  const handleEditar = (id) => {
    setIdTarefaSelecionada(id);
    const tarefaParaEditar = tarefas.find((obj) => obj.idTarefa === id);
    setTarefa(tarefaParaEditar);
    setOpenEditar(true);
  };

  const handleDeletar = (id) => {
    setTarefas((current) => current.filter((tarefa) => tarefa.idTarefa !== id));
  };

  return (
    <>
      <Card sx={{ margin: '2rem', boxShadow: 3 }}>
        <CardHeader
          title="Gestão de Tarefas"
          subheader="Listagem e gerenciamento de tarefas"
          sx={{ textAlign: 'center', backgroundColor: '#1976d2', color: '#fff' }}
        />
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Título</TableCell>
                  <TableCell align="right">Descrição</TableCell>
                  <TableCell align="right">Início</TableCell>
                  <TableCell align="right">Fim</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Recurso</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map((row, indice) => (
                  <TableRow key={indice} hover>
                    <TableCell component="th" scope="row">
                      {row.idTarefa}
                    </TableCell>
                    <TableCell>{row.tituloTarefa}</TableCell>
                    <TableCell align="right">{row.descricaoTarefa}</TableCell>
                    <TableCell align="right">{row.inicioTarefa}</TableCell>
                    <TableCell align="right">{row.fimTarefa}</TableCell>
                    <TableCell align="right">{row.statusTarefa}</TableCell>
                    <TableCell align="right">{row.recursoTarefa}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Editar Tarefa">
                        <IconButton
                          color="primary"
                          onClick={() => handleEditar(row.idTarefa)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Excluir Tarefa">
                        <IconButton
                          color="error"
                          onClick={() => handleDeletar(row.idTarefa)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleOpen}
          >
            Criar Tarefa
          </Button>
          <Button variant="outlined" color="secondary">
            Cancelar
          </Button>
        </CardActions>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Paper sx={{ margin: 'auto', padding: '2rem', width: '50%' }}>
          <CriarTarefa handleClose={handleClose} tarefas={tarefas} setTarefas={setTarefas} />
        </Paper>
      </Modal>

      <Modal open={openEditar} onClose={handleCloseEditar}>
        <Paper sx={{ margin: 'auto', padding: '2rem', width: '50%' }}>
          <EditarTarefa
            handleCloseEditar={handleCloseEditar}
            idTarefaSelecionada={idTarefaSelecionada}
            tarefas={tarefas}
            tarefa={tarefa}
            setTarefas={setTarefas}
          />
        </Paper>
      </Modal>
    </>
  );
};

export default ListarTarefa;
