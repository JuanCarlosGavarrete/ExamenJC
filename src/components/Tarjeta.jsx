
import React from 'react';
import iguana from '../assets/iguana.webp';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

function Tarjeta({
    nombreUsuario = 'Nombre',
    correo = 'nombre@correo.com',
    titulo,
    descripcion,
    id,
}) {
    const esPost = titulo !== undefined;

    return (
        <Card
            sx={{
                maxWidth: 345,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                transition: '0.3s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                },
            }}
        >
            {!esPost && (
                <CardMedia
                    sx={{ height: 140 }}
                    image={iguana}
                    title="Green iguana"
                />
            )}

            <CardContent sx={{ flexGrow: 1 }}>
                {esPost && (
                    <Chip
                        label={`Post #${id}`}
                        color="primary"
                        size="small"
                        sx={{ mb: 1.5 }}
                    />
                )}

                <Typography gutterBottom variant="h6" component="div">
                    {esPost ? titulo : nombreUsuario}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', overflowWrap: 'anywhere' }}
                >
                    {esPost ? descripcion : correo}
                </Typography>

                {!esPost && (
                    <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mt: 1 }}
                    >
                        Lorem ipsum dolor sit amet consectetur adi.
                    </Typography>
                )}
            </CardContent>

            <CardActions>
                <Button
                    size="small"
                    onClick={() =>
                        alert(
                            esPost
                                ? `Post #${id}\n\n${titulo}\n\n${descripcion}`
                                : `Usuario: ${nombreUsuario}\nCorreo: ${correo}`
                        )
                    }
                >
                    Ver más...
                </Button>
            </CardActions>
        </Card>
    );
}

export default Tarjeta;
