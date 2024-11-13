import React, { useState, useEffect } from 'react';
import { 
  FormControl, 
  InputLabel, 
  Input, 
  FormHelperText, 
  MenuItem, 
  Select, 
  Grid, 
  Card, 
  CardHeader, 
  CardContent, 
  CardActions, 
  Button 
} from '@mui/material';

// Declaração do componente EditarTarefa
const EditarTarefa = ({ handleCloseEditar, idTarefaSelecionada, tarefas, tarefa, setTarefas }) => {
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    setTituloTarefa(tarefa.tituloTarefa || '');
    setDescricaoTarefa(tarefa.descricaoTarefa || '');
    setInicioTarefa(tarefa.inicioTarefa || '');
    setFimTarefa(tarefa.fimTarefa || '');
    setRecursoTarefa(tarefa.recursoTarefa || '');
    setStatusTarefa(tarefa.statusTarefa || '');
  }, [tarefa]);

  const handleEditar = () => {
    setTarefas(current =>
      current.map(obj =>
        obj.idTarefa === idTarefaSelecionada
          ? {
              ...obj,
              tituloTarefa,
              descricaoTarefa,
              inicioTarefa,
              fimTarefa,
              recursoTarefa,
              statusTarefa,
            }
          : obj
      )
    );
    handleCloseEditar();
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Card sx={style}>
        <CardHeader title="Editar Tarefa" subheader="Atualize as informações da tarefa" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tituloTarefa">Título</InputLabel>
                <Input
                  id="tituloTarefa"
                  value={tituloTarefa}
                  onChange={e => setTituloTarefa(e.target.value)}
                  aria-describedby="titulo-helper"
                />
                <FormHelperText id="titulo-helper">Título da tarefa</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="descricaoTarefa">Descrição</InputLabel>
                <Input
                  id="descricaoTarefa"
                  value={descricaoTarefa}
                  onChange={e => setDescricaoTarefa(e.target.value)}
                  aria-describedby="descricao-helper"
                />
                <FormHelperText id="descricao-helper">Descrição detalhada da tarefa</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel shrink htmlFor="inicioTarefa">Início</InputLabel>
                <Input
                  type="date"
                  id="inicioTarefa"
                  value={inicioTarefa}
                  onChange={e => setInicioTarefa(e.target.value)}
                  aria-describedby="inicio-helper"
                />
                <FormHelperText id="inicio-helper">Data de início</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel shrink htmlFor="fimTarefa">Fim</InputLabel>
                <Input
                  type="date"
                  id="fimTarefa"
                  value={fimTarefa}
                  onChange={e => setFimTarefa(e.target.value)}
                  aria-describedby="fim-helper"
                />
                <FormHelperText id="fim-helper">Data de finalização</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="recursoTarefa-label">Recurso</InputLabel>
                <Select
                  labelId="recursoTarefa-label"
                  id="recursoTarefa"
                  value={recursoTarefa}
                  onChange={e => setRecursoTarefa(e.target.value)}
                >
                  <MenuItem value="Recurso 1">Recurso 1</MenuItem>
                  <MenuItem value="Recurso 2">Recurso 2</MenuItem>
                  <MenuItem value="Recurso 3">Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="statusTarefa-label">Status</InputLabel>
                <Select
                  labelId="statusTarefa-label"
                  id="statusTarefa"
                  value={statusTarefa}
                  onChange={e => setStatusTarefa(e.target.value)}
                >
                  <MenuItem value="Aguardando">Aguardando</MenuItem>
                  <MenuItem value="Em Andamento">Em Andamento</MenuItem>
                  <MenuItem value="Concluída">Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 2 }}>
          <Button variant="contained" color="primary" onClick={handleEditar}>
            Salvar Alterações
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleCloseEditar}>
            Cancelar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default EditarTarefa;
