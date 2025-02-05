import {
    AdminPanelSettings,
    BugReport,
    CalendarMonth,
    GitHub,
    Lightbulb,
    Pause,
    RestaurantMenu,
    VideogameAsset,
} from '@mui/icons-material'
import { Box } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { AppStore } from '../globalStores/AppStore'
import { IconLink } from '../reusableComponents/common/IconLink'
import MainLayout from '../reusableComponents/layouts/MainLayout'

const HomePage = observer(() => {
    const canSeeAdminPage = AppStore.authStore.connected
        ? AppStore.authStore.user.rights !== 0
        : false

    return (
        <MainLayout fullscreen>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    marginTop: ['140px', 0],
                }}
            >
                <IconLink Icon={CalendarMonth} link="/rooms" title="Réservation de salles" />
                <IconLink Icon={RestaurantMenu} link="/saveur" title="Restaurants" />
                <IconLink Icon={VideogameAsset} link="/games/tournois" title="Platformer" />
                <IconLink Icon={Lightbulb} link="/ideas" title="Boîte à idée" />
                <IconLink Icon={Pause} link="/galabreak" title="Pause ?" />
                <IconLink
                    Icon={GitHub}
                    link="https://github.com/mle-moni/galadrim-tools"
                    title="Participer"
                />
                <IconLink
                    Icon={BugReport}
                    link="https://github.com/mle-moni/galadrim-tools/issues"
                    title="Reporter un bug"
                />
                <IconLink
                    Icon={AdminPanelSettings}
                    link="/admin"
                    title="Administration"
                    hidden={!canSeeAdminPage}
                />
            </Box>
        </MainLayout>
    )
})

export default HomePage
