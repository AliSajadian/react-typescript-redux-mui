import { FC, ReactElement } from 'react';
import { 
    Card, 
    CardContent, 
    CardMedia, 
    Typography 
} from '@mui/material';


interface MediaCardProps {
    title: string;
    description: string;
    imgUrl: string;
}
const MediaCard: FC<MediaCardProps> = ({ title, description, imgUrl }): ReactElement => {
  return (
    <Card sx={{ maxWidth: 300, height:180 }}>
      <CardMedia
        sx={{ height: 120, mb:0.2, }}
        image={imgUrl}
        title="green iguana"
      />
      <CardContent sx={{py:0.1, textAlign:'center'}}>
        <Typography gutterBottom sx={{m:0.1, fontSize: { xs:'8pt', sm:'9pt', md:'10pt', lg:'11pt', fontWeight:'bold'}}}>
          {title}
        </Typography>
        <Typography sx={{fontSize: { xs:'7pt', sm:'8pt', md:'9', lg:'10pt', mt:0}}} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MediaCard;

