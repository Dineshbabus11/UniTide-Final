import React from 'react';
import './Alumni.scss';
import {
    Card, Box, Chip, Stack, Divider, Typography, Avatar, Button
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Alumni = ({ searchTerm }) => {

    const alumniData = [
        {
            name: 'Abijith P Suthi',
            dept: 'B.Tech AI&DS',
            role: 'Software Developer',
            batch: '2020-2024',
        },
        {
            name: 'Dinesh Babu S',
            dept: 'B.Tech IT',
            role: 'ML Engineer',
            batch: '2022-2026',
        },
        {
            name: 'Haneefdeen S',
            dept: 'B.E BME',
            role: 'Starup',
            batch: '2019-2023',
        },
        {
            name: 'Sadhana K',
            dept: 'B.E CSE',
            role: 'Web Developer',
            batch: '2020-2024',
        },
        {
            name: 'Sharmitha S',
            dept: 'B.E AIML',
            role: 'Data Scientist',
            batch: '2021-2025',
        },
        {
            name: 'Abijith P Suthi',
            dept: 'B.Tech AI&DS',
            role: 'Software Developer',
            batch: '2020-2024',
        },
        {
            name: 'Dinesh Babu S',
            dept: 'B.Tech IT',
            role: 'ML Engineer',
            batch: '2022-2026',
        },
        {
            name: 'Haneefdeen S',
            dept: 'B.E BME',
            role: 'Starup',
            batch: '2019-2023',
        },
        {
            name: 'Sadhana K',
            dept: 'B.E CSE',
            role: 'Web Developer',
            batch: '2020-2024',
        },
        {
            name: 'Sharmitha S',
            dept: 'B.E AIML',
            role: 'Data Scientist',
            batch: '2021-2025',
        },
        {
            name: 'Abijith P Suthi',
            dept: 'B.Tech AI&DS',
            role: 'Software Developer',
            batch: '2020-2024',
        },
        {
            name: 'Dinesh Babu S',
            dept: 'B.Tech IT',
            role: 'ML Engineer',
            batch: '2022-2026',
        },
        {
            name: 'Haneefdeen S',
            dept: 'B.E BME',
            role: 'Starup',
            batch: '2019-2023',
        },
        {
            name: 'Sadhana K',
            dept: 'B.E CSE',
            role: 'Web Developer',
            batch: '2020-2024',
        },
        {
            name: 'Sharmitha S',
            dept: 'B.E AIML',
            role: 'Data Scientist',
            batch: '2021-2025',
        },

    ];

    const filteredAlumni = alumniData.filter((alum) =>
        alum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alum.dept.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alum.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alum.batch.includes(searchTerm)
    );

    return (
        <div className="alumni">
            {filteredAlumni.length > 0 ? (
                filteredAlumni.map((alum, index) => (
                    <Card
                        variant="outlined"
                        key={index}
                        className="alumni-card"
                        sx={{
                            width: '300px',
                            borderRadius: '16px',
                            transition: 'transform 0.2s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: 3,
                            },
                        }}
                    >
                        <Box sx={{ p: 2 }}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Avatar>{alum.name.charAt(0)}</Avatar>
                                <Box>
                                    <Typography variant="h6">{alum.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {alum.dept}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                        <Divider />
                        <Box sx={{ px: 2, py: 1 }}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <WorkIcon sx={{ fontSize: 18 }} />
                                <Typography variant="body2">{alum.role}</Typography>
                            </Stack>
                        </Box>
                        <Box sx={{ px: 2, pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <SchoolIcon sx={{ fontSize: 18 }} />
                                <Chip label={alum.batch} size="small" color="primary" />
                            </Stack>
                            <Button
                                variant="text"
                                size="small"
                                startIcon={<MailOutlineIcon />}
                                sx={{ textTransform: 'none' }}
                            >
                                Contact
                            </Button>
                        </Box>
                    </Card>
                ))
            ) : (
                <Typography variant="body1" sx={{ mt: 4 }}>
                    No alumni found.
                </Typography>
            )}
        </div>
    );
};
