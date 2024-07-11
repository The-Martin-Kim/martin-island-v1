import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Container, Button } from '@mui/material';

function Teacher() {
    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Card elevation={3}>
                <CardContent style={{ textAlign: 'center' }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://capsule-render.vercel.app/api?type=transparent&height=150&section=header&text=The-Martin-Kim&animation=fadeIn&fontColor=f9a03a&fontSize=70"
                        alt="header"
                    />
                    <Typography variant="h5" component="h2" style={{ margin: '1.5rem 0' }}>
                        🐬 Founder and President of the IT Platform Society, AIIA
                    </Typography>
                    <Typography variant="body1" component="p" style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                        👨🏻‍💻 Integrated BS-MS Student in Financial Data Science <br />
                        💻 AI Model Developer specializing in PyTorch | 🚀 Product Manager
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginBottom: '1.5rem' }}>
                        자율형 사립고등학교인 모교에서의 대회 수상(창의력 대회, SW 공모대회, SW 교육 컨텐츠 대회 등) 이력과
                        학생부 종합전형 중심의 학교 생활 경험을 바탕으로 현재까지도 많은 중·고등학생의 교내/외 대회 및 수행평가 관련 활동을 지도하고 있습니다.
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginBottom: '1.5rem' }}>
                        2019년도부터 대치동 소재의 진학입시교육학원에서 입시 담당 선생님으로 재직하며 생활기록부 관련 지도와 자기소개서 첨삭,
                        면접 수업 진행 등의 여러 대입 관련 업무를 도맡아 왔습니다.
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginBottom: '1.5rem' }}>
                        현재 가천대학교 AI·소프트웨어학부 인공지능 전공에 재학 중으로, Financial Data Science Lab.에서의 학부 연구생 활동과 IT 플랫폼
                        탐구·개발 자율동아리 창설 및 운영을 하고 있습니다. 졸업 이후에는 이수 중인 학·석사 연계 과정을 잘 마무리할 계획입니다.
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginBottom: '1.5rem' }}>
                        대학교에서는 SW중심대학 대학혁신사업의 일환으로 원격교육지원센터에서 운영하는 창의 Ntree Camp의 운영·교육 조교로 임명되어 SW 수업 및 교육 자료 제작 업무를 담당하였습니다.
                    </Typography>
                    <Typography variant="body2" component="p" style={{ marginBottom: '1.5rem' }}>
                        압구정/반포/대치 소재의 IT 학원 출강을 통한 탄탄한 수업 경험과 다양한 학생 경험을 바탕으로 C언어, JAVA, Python, Machine Learning,
                        Data Analysis 등의 프로그래밍 수업과 *대입 면접 수업을 진행하고 있습니다. *(2023년 주요 실적: 한양대 서울캠 SW 특기자 전형 최초합,
                        국민대 SW 특기자 전형 최초합, 가천대 조기취업형 계약학과 전형 최초합)
                    </Typography>
                    <Box style={{ margin: '1.5rem 0' }}>
                        <Button href="https://sites.google.com/view/fdslab" target="_blank" rel="noopener noreferrer" variant="contained" color="primary" style={{ margin: '0.5rem' }}>
                            FDS LAB
                        </Button>
                        <Button href="https://velog.io/@martiny/posts" target="_blank" rel="noopener noreferrer" variant="contained" color="secondary" style={{ margin: '0.5rem' }}>
                            Velog
                        </Button>
                        <Button href="https://isegye-deeplearning.tistory.com" target="_blank" rel="noopener noreferrer" variant="contained" color="error" style={{ margin: '0.5rem' }}>
                            Tistory
                        </Button>
                        <Button href="https://aiia-gcu.com" target="_blank" rel="noopener noreferrer" variant="contained" color="info" style={{ margin: '0.5rem' }}>
                            AIIA
                        </Button>
                    </Box>
                    <Typography variant="body2" component="p" style={{ fontStyle: 'italic', marginTop: '1.5rem' }}>
                        "Stay hungry. Stay foolish." - Steve Jobs (1955-2011)
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Teacher;
