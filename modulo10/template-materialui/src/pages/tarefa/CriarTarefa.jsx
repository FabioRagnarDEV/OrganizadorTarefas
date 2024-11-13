import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
  MenuItem,
  Select,
  Alert
} from '@mui/material';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa), 0) + 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    // Validação
    if (!tituloTarefa || !descricaoTarefa || !inicioTarefa || !fimTarefa || !recursoTarefa || !statusTarefa) {
      setError('Todos os campos devem ser preenchidos!');
      return;
    }

    if (new Date(inicioTarefa) > new Date(fimTarefa)) {
      setError('A data de início não pode ser posterior à data de fim.');
      return;
    }

    // Salva a tarefa
    setTarefas([
      ...tarefas,
      { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, recursoTarefa, statusTarefa }
    ]);
    setSuccess(true);
    setError('');
    // Limpar o formulário
    setTituloTarefa('');
    setDescricaoTarefa('');
    setInicioTarefa('');
    setFimTarefa('');
    setRecursoTarefa('');
    setStatusTarefa('');
    handleClose();
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh', bgcolor: '#f5f5f5' }}>
      <Card sx={style}>
        <CardHeader
          title="Cadastro de Tarefas"
          sx={{
            bgcolor: '#1976d2',
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        />
        <CardContent>
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">Tarefa salva com sucesso!</Alert>}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_titulo">Título da Tarefa</InputLabel>
                <Input
                  id="tarefa_titulo"
                  value={tituloTarefa}
                  onChange={(e) => setTituloTarefa(e.target.value)}
                  sx={{ padding: '8px' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_descricao">Descrição da Tarefa</InputLabel>
                <Input
                  id="tarefa_descricao"
                  value={descricaoTarefa}
                  onChange={(e) => setDescricaoTarefa(e.target.value)}
                  sx={{ padding: '8px' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_inicio">Início da Tarefa</InputLabel>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  value={inicioTarefa}
                  onChange={(e) => setInicioTarefa(e.target.value)}
                  sx={{ padding: '8px' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_fim">Fim da Tarefa</InputLabel>
                <Input
                  id="tarefa_fim"
                  type="date"
                  value={fimTarefa}
                  onChange={(e) => setFimTarefa(e.target.value)}
                  sx={{ padding: '8px' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  onChange={handleRecurso}
                  sx={{ padding: '8px' }}
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  onChange={handleStatus}
                  sx={{ padding: '8px' }}
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center" mt={3}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleSalvar}>
                Salvar
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary" onClick={handleClose}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const style = {
  width: '50%',
  padding: '20px',
  bgcolor: '#ffffff',
  boxShadow: 3,
  borderRadius: 2,
};

export default CriarTarefa;
