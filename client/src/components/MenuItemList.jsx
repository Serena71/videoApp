import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';

export const menuItemList1 = [
  { path: '/', name: 'Home', icon: <HomeIcon /> },
  { path: 'trends', name: 'Explore', icon: <ExploreOutlinedIcon /> },
  { path: 'subscriptions', name: 'Subscription', icon: <SubscriptionsOutlinedIcon /> },
];

export const menuItemList2 = [
  { path: 'library', name: 'Library', icon: <VideoLibraryOutlinedIcon /> },
  { path: 'history', name: 'History', icon: <HistoryOutlinedIcon /> },
];

export const menuItemList3 = [
  { path: 'music', name: 'Music', icon: <LibraryMusicOutlinedIcon /> },
  { path: 'sports', name: 'Sports', icon: <SportsBasketballOutlinedIcon /> },
  { path: 'gaming', name: 'Gaming', icon: <SportsEsportsOutlinedIcon /> },
  { path: 'movies', name: 'Movies', icon: <MovieCreationOutlinedIcon /> },
  { path: 'news', name: 'News', icon: <ArticleOutlinedIcon /> },
  { path: 'live', name: 'Live', icon: <LiveTvOutlinedIcon /> },
];

export const menuItemList4 = [
  { path: 'settings', name: 'Settings', icon: <SettingsOutlinedIcon /> },
  { path: 'report', name: 'Report', icon: <FlagOutlinedIcon /> },
  { path: 'help', name: 'Help', icon: <HelpOutlineOutlinedIcon /> },
  { name: 'Mode', icon: <SettingsBrightnessOutlinedIcon /> },
];
