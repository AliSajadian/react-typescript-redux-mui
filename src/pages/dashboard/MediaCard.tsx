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
    <Card sx={{ height:180 }}>
      <CardMedia
        sx={{ height: 120, mb:0.2, }}
        image={imgUrl}
        title="green iguana"
      />
      <CardContent sx={{py:0.1, textAlign:'center'}}>
        <Typography gutterBottom sx={{m:0.1, mb:0.4, fontSize:'11pt', fontWeight:'bold'}}>
          {title}
        </Typography>
        <Typography sx={{fontSize:'10pt' , lineHeight:1, mt:0}} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
// { xs:'7pt', sm:'8pt', md:'9', lg:'10pt'}
export default MediaCard;

