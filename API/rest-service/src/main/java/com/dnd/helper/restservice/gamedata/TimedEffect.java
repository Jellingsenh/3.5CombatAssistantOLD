package com.dnd.helper.restservice.gamedata;

import java.io.Serializable;

public class TimedEffect implements Serializable {
	//default serialVersion id
    private static final long serialVersionUID = 1L;
	
	private String name;
	private String effect;
	private String targets;
	private long timeLeft; // in rounds
	// server-side only: 
	private long timeEnd; // the round on which it will no longer be active
	private int initToEndOn;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEffect() {
		return effect;
	}
	public void setEffect(String effect) {
		this.effect = effect;
	}
	public long getTimeLeft() {
		return timeLeft;
	}
	public void setTimeLeft(long timeLeft) {
		this.timeLeft = timeLeft;
	}
	public String getTargets() {
		return targets;
	}
	public void setTargets(String targets) {
		this.targets = targets;
	}
	public long getTimeEnd() {
		return timeEnd;
	}
	public void setTimeEnd(long timeEnd) {
		this.timeEnd = timeEnd;
	}
	public int getInitToEndOn() {
		return initToEndOn;
	}
	public void setInitToEndOn(int initToEndOn) {
		this.initToEndOn = initToEndOn;
	}
	
}
