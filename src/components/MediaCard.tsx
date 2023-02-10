import { FC, ReactElement } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// "/static/images/cards/contemplative-reptile.jpg"
interface MediaCardProps {
    title: string;
    description: string;
    imgUrl: string;
}
const MediaCard: FC<MediaCardProps> = ({ title, description, imgUrl }): ReactElement => {
  return (
    <Card sx={{ maxWidth: 500, height:180 }}>
      <CardMedia
        sx={{ height: 120, mb:0.2, }}
        image={imgUrl}
        title="green iguana"
      />
      <CardContent sx={{py:0.1, textAlign:'center'}}>
        <Typography gutterBottom variant="subtitle1" component="div" sx={{m:0.1, }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{mt:0, }}>
          {description}
        </Typography>
      </CardContent>
      {/* <CardActions sx={{border:1}}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default MediaCard;

