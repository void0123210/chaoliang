---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---

My research brings together **active noise control**, **adaptive signal processing**, **model-predictive control**, and **deep learning for acoustics**. A central theme is the development of methods that remain effective under delays, changing acoustic paths, non-stationary noise, and limited sensing.

## Robust Adaptive Control for ANC

Conventional filtered-x adaptive algorithms depend on a sufficiently accurate secondary-path model. This dependence becomes restrictive when the acoustic environment changes. I investigate model-free and online-adaptive alternatives, with particular emphasis on simultaneous perturbation stochastic approximation (SPSA).

My stepwise SPSA method applies perturbations in structured segments to improve stability while retaining the low-complexity advantages of standard SPSA. The method was studied analytically, evaluated in simulation, and implemented in real time on an ADSP-SC584 DSP platform.

**Key topics:** model-free adaptation, stability analysis, secondary-path variation, real-time DSP implementation.

## Model-Predictive Control with Acoustic Delays

Acoustic propagation introduces delays that complicate closed-loop control. I developed a state-space MPC framework that incorporates these delays directly, avoiding the need for an additional signal-prediction model.

The work examines the balance between control performance and computational cost and demonstrates real-time feasibility. Experiments achieved 11 dB noise reduction for white-noise excitation.

**Key topics:** delayed systems, state-space modeling, optimization-based control, low-latency implementation.

## Spatial-Temporal Sound-field Prediction

Measuring a dense three-dimensional sound field can require many microphones and may be impractical in real applications. I developed an attentive one-dimensional U-Net that predicts far-field signals from a limited set of near-field waveform measurements.

The multichannel framework predicts 64 far-field signals synchronously and adapts across changes in source location, air temperature, reverberation time, and measurement noise. This work connects learned acoustic representations with low-latency sound control.

**Key topics:** multichannel prediction, U-Net, self-attention, spatial acoustics, environment adaptation.

## Experimental and Industrial Validation

My research includes real-time laboratory implementation and industrial experiments rather than simulation alone. Platforms and settings include:

- ADSP-SC584 DSP-based active control
- Speedgoat real-time target systems
- Multichannel acoustic measurement and prediction
- Non-stationary engine-noise experiments in simplified automotive cabins
- Academic-industry work through the IN-NOVA network and Müller-BBM

## Research Projects

### IN-NOVA — Horizon Europe MSCA Doctoral Network

The project investigated active reduction of noise transmitted into and from enclosures through encapsulated structures. My work focused on robust ANC algorithms and sound-field prediction, connecting methodological development with experimental validation.

### LEPCO-EX2 — PRIN 2022 PNRR Project

The project studies learning-based model-predictive control through exploration and exploitation in uncertain environments. I contributed ANC algorithm design and led experimental validation activities.

The work involved collaboration with Politecnico di Milano, Silesian University of Technology, Universitat Politècnica de València, and Müller-BBM. Publication details and paper links are collected on the [Publications page]({{ '/publications/' | relative_url }}).
